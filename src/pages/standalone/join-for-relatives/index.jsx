import styles from './index.module.scss'
import {useEffect, useState} from "react";
import PageNavigation from "../../../components/page-navigation.jsx";
import icOnlineService from "../../../assets/ic_online_service.svg";
import imgJoinForRelativesBanner from "../../../assets/images/img_join_for_relatives_banner.png";
import icMainLogo from '../../../assets/ic_main_logo.svg'
import icRelativesWallet from '../../../assets/ic_relatives_wallet.svg'
import icRelativesCoin from '../../../assets/ic_relatives_coin.svg'
import icQualification1 from '../../../assets/ic_qualification_1.svg'
import icQualification2 from '../../../assets/ic_qualification_2.svg'
import icQualification3 from '../../../assets/ic_qualification_3.svg'

import {DownOutline} from "antd-mobile-icons";
import {Collapse, Dialog, Tabs} from "antd-mobile";

const collapsePanelData = {
    'help-rule': {
        name: '互助规则',
        data: [
            {
                title: '加入条件',
                subTitle: <span>18-75周岁</span>,
                content: (
                    <>
                        <span>1. 加入时，年龄在18周岁（含）至75周岁（含）；</span>
                        <span>2. 加入时已完整、仔细阅读《免费找律师计划公约》和《免 费请律师60元5年服务规则》，并且同意并承诺遵守全部内容。</span>
                    </>
                )
            },
            {
                title: '互助费用',
                subTitle: <span>每期公示最高均摊<span style={{color: '#FB5438'}}>5元</span></span>,
                content: (
                    <>
                        <span>1. 若有会员碰到法律援助，符合互助条件将会定期公示。</span>
                        <span>2. 公示结束后，其他会员为其均摊捐助互助金。</span>
                        <span>3. 60元5年服务的会员每期的互助事件，最高均摊5元。</span>
                    </>
                )
            },
            {
                title: '管理费',
                subTitle: <span>{`1元/人/月`}</span>,
                content: (
                    <>
                        <span>1. 为保证长期稳定运营，收取小额管理费。</span>
                        <span>2. 自加入本互助计划的次月起收取。</span>
                        <span>3. 每月1号从会员账户余额扣除当月管理费。</span>
                        <span>4. 管理费用于互助计划的运营成本开支，如技术开发、运营管理、人力资源配置等。</span>
                    </>
                )
            },
            {
                title: '互助资格',
                subTitle: <span>{`账户余额>0元，即可一直有效`}</span>,
                content: (
                    <>
                        <span>{`1. 为享有互助资格，会员在本互助计划的账户余额需>0元。`}</span>
                        <span>2. 无论任何原因，一旦出现账户余额等于0元，或有一次无法足额履行均摊捐款义务，视为会员自愿退出本互助计划。</span>
                        <span>3. 退出后，失去互助资格，不再享有申请互助的权利。</span>
                        <span>4. 退出后再次加入，需重新计算180天等待期。</span>
                    </>
                )
            },
            {
                title: '等待期',
                subTitle: <span>{`180天（确保公平）`}</span>,
                content: (
                    <>
                        <span>{`1. 为防止紧急需要律师帮助的用户加入，或者骗取互助金的情况发生，设置180天等待期。观察期内的会员不予互助。`}</span>
                        <span>2. 本互助计划仅对加入满180天观察期后首次发生的事件进行互助。</span>
                        <span>3. 会员在180天观察期内，仍需按照平台规则进行捐助。</span>
                    </>
                )
            },
        ]
    },
    'qAndA': {
        name: '常见问题',
        data: [
            {
                title: '免费请律师互助计划是不是保险？',
                subTitle: '',
                content: (
                    <>
                        <span>免费请律师不是保险。加入互助计划是单向的捐赠或捐助行为，不能预期获得确定的风险保障。</span>
                    </>
                )
            },
            {
                title: '加入充值的金额可以用多久？',
                subTitle: '',
                content: (
                    <>
                        <span>加入时充值的金额预存至您在本计划账户中，用于均摊捐助发生互助事件的会员和缴纳管理费。</span>
                        <span>60元5年版预计可用3至5年。</span>
                    </>
                )
            },
            {
                title: '能否为亲友加入？',
                subTitle: '',
                content: (
                    <>
                        <span>只要符合加入条件，均可输入亲友的身份信息为其加入。</span>
                    </>
                )
            },
        ]
    }
}

const tabs = [
    {
        key: 'baoan',
        title: '报案',
        content: '申请人可通过微信公众号【免费请律师】进入会员中心，申请互助。',
    },
    {
        key: 'tijiaocailiao',
        title: '提交材料',
        content: '申请后，我们将一对一指导您提交资料，并发送互助金申请指引邮件。'
    },
    {
        key: 'shenhe',
        title: '审核',
        content: '审核材料，确认是否达到互助条件，未达到互助条件，平台将及时告知申请会员'
    },
    {
        key: 'gongshi',
        title: '公示',
        content: '审核通过后，将通过微信公众号【免费请律师】公示7天。'
    },
    {
        key: 'jifu',
        title: '给付',
        content: '公示期满当日，会员应均摊金额将从账户余额中扣除，并在3个工作内将互助金一次性捐赠给互助申请会员'
    }
]

const JoinForRelatives = function () {
    const [detailData, setDetailData] = useState({})

    // todo: 获取详情数据
    useEffect(() => {
        const fetchData = async () => {
            const result = await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        data: {
                            id: Math.random().toString().split('.')[1],
                            helpedAmount: 167195497, // 已互助金额
                            helpedCases: 126, // 互助事件
                        },
                        code: 200,
                        msg: null,
                    })
                })
            })

            if (result && result.code === 200) {
                setDetailData(result.data);
            } else {
                setDetailData({})
            }
        }
        fetchData();
    }, []);

    // 点击 说明部分的 按钮
    const handleViewInstruction = (type) => {
        let content = ''
        let title = ''
        switch (type) {
            case 'hangaifuwu':
                title = '涵盖服务';
                content = '商品房纠纷 离婚 交通事故 刑事辩护 婚姻家庭 工伤赔偿 劳动纠纷 房产纠纷 土地纠纷 债权债务 医疗纠纷 拆迁安置 抵押担保 合同纠纷 法律顾问 公司解散 人身损害 保险理赔 工程建筑 银行 知识产权 消费权益 取保候审 暴力犯罪 毒品犯罪 公司法 公司上市 兼并收购 股权激励 股权纠纷 经济犯罪 金融证券 破产清算 改制重组 融资借款 商标 死刑辩护 刑事自诉 继承 专利 著作权 反不正当竞争 电信通讯 调解谈判 高新技术 个人独资公司法 公安国安 工商查询 税务 公司犯罪 广告宣传 国家赔偿 国际贸易 海关商检 海事海商 合伙联营 合同审查 合资合作 环境污染 火灾赔偿 经济仲裁 经销代理 自然资源 加盟维权 旅游 民间借贷 票据 期货交易 轻法咨询 倾销补贴 侵权 综合 求学教育 涉外法律 涉外仲裁 水利电力 私人律师 外商投资 网络法律 法律文书代写 WTO事务 污染损害 行政 行政复议 行政诉讼 刑事合规 新三板 新闻侵权 移民纠纷 邮政储蓄 娱乐法 招标投标 招商引资 职务犯罪 资产拍卖 资信调查'
                break;

            case 'zuigaohuzhujin':
                title = '最高互助金额';
                content = (
                    <span>
                        <span>民事案件最高可互助<span style={{color: '#FE0000'}}>10000</span>元；</span>
                        <p/>
                        <span>刑事案件最高可互助<span style={{color: '#FE0000'}}>30000</span>元。</span>
                    </span>

                )
                break;

            case 'jikejiaru':
                title = '60元即可加入';
                content = (
                    <span>
                        <span>60元预存至您在本互助计划的账户中，用于：</span>
                        <p/>
                        <span>（1）均摊捐助发生互助事件的会员；</span>
                        <p/>
                        <span>（2）缴纳管理费；</span>
                        <p/>
                        <span style={{color: '#FE0000'}}>{`注：请保持账户余额>0元，否则将失去互助资格。`}</span>
                    </span>
                )
                break;

            default:
                break;
        }

        Dialog.alert({
            title,
            content,
            confirmText: (
                <div style={{
                    padding: '0.4rem',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        width: '90%',
                        background: '#F04141',
                        color: '#fff',
                        height: '4rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        borderRadius: '0.6rem'
                    }}>确定
                    </div>
                </div>
            )
        })
    }

    // 点击 客服 按钮
    const handleClickServiceButton = () => {

    }

    // 点击 立即加入 按钮
    const handleClickJoinImmediateButton = () => {

    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={`免费请律师互助计划（60元5年版）`}
            />
            <div style={{overflow: 'auto', width: '100%', height: 'calc(100vh - 10rem)'}}>
                {/*banner*/}
                <div className={styles.bannerWrapper}>
                    <img src={imgJoinForRelativesBanner} style={{width: '100%'}}/>
                </div>

                {/*介绍-免费请律师*/}
                <div className={styles.introductionWrapper}>
                    <div className={styles.instructionTitle}>
                        <div className={styles.underlineIndicator}/>
                        <span className={styles.textContent}>免费请律师</span>
                        <span className={styles.subTextContent}>60元5年服务费</span>
                    </div>
                    <div className={styles.instructionContent}>
                        <div className={styles.contentItemWrapper} onClick={() => handleViewInstruction('hangaifuwu')}>
                            <img src={icMainLogo} style={{width: '3rem'}}/>
                            <span style={{color: '#000', fontWeight: 'bold', fontSize: '2rem'}}>免费请律师</span>
                            <span style={{color: '#939393', fontWeight: 'bold'}}>涵盖服务</span>
                            <DownOutline color={'#DCDCDC'} style={{fontSize: '1.8rem'}}/>
                        </div>
                        <div className={styles.contentItemWrapper}
                             onClick={() => handleViewInstruction('zuigaohuzhujin')}>
                            <img src={icRelativesWallet} style={{width: '3rem'}}/>
                            <span style={{color: '#000', fontWeight: 'bold', fontSize: '2rem'}}>30000元</span>
                            <span style={{color: '#939393', fontWeight: 'bold'}}>最高互助金</span>
                            <DownOutline color={'#DCDCDC'} style={{fontSize: '1.8rem'}}/>
                        </div>
                        <div className={styles.contentItemWrapper} onClick={() => handleViewInstruction('jikejiaru')}>
                            <img src={icRelativesCoin} style={{width: '3rem'}}/>
                            <span style={{color: '#000', fontWeight: 'bold', fontSize: '2rem'}}>60元</span>
                            <span style={{color: '#939393', fontWeight: 'bold'}}>即可加入</span>
                            <DownOutline color={'#DCDCDC'} style={{fontSize: '1.8rem'}}/>
                        </div>
                    </div>
                </div>

                {/*互助金额*/}
                <div className={styles.helpedContentWrapper}>
                    <div className={styles.helpedContentItemWrapper}>
                        <span>{detailData?.helpedAmount}元</span>
                        <span style={{color: '#878787', fontSize: '1.4rem'}}>已互助金额</span>
                    </div>
                    <div className={styles.helpedContentItemWrapper}>
                        <span>{detailData?.helpedCases}起</span>
                        <span style={{color: '#878787', fontSize: '1.4rem'}}>互助事件</span>
                    </div>
                </div>

                {/*互助规则*/}
                <div className={styles.collapsePanelContainer}>
                    <div className={styles.nameWrapper}>
                        <span>{collapsePanelData["help-rule"]['name']}</span>
                    </div>
                    <Collapse accordion>
                        {
                            (collapsePanelData['help-rule']['data'] || []).map((item, index) => {
                                return (
                                    <Collapse.Panel
                                        key={String(index)}
                                        title={<span style={{fontSize: '1.4rem', color: '#000'}}>{item?.title}<span
                                            style={{
                                                marginLeft: '2rem',
                                                color: '#7F7F7F',
                                            }}>{item?.subTitle}</span></span>}
                                    >
                                        <div className={styles.panelContentWrapper}>
                                            {item?.content}
                                        </div>
                                    </Collapse.Panel>
                                )
                            })
                        }
                    </Collapse>
                    <div className={styles.panelFooterWrapper}>
                        <span>《免费请律师计划公约》</span>
                        <span>《详细规则》</span>
                    </div>
                </div>

                {/*互助申请流程*/}
                <div className={styles.applyFlowContainer}>
                    <div className={styles.nameWrapper}>
                        <span>互助申请流程</span>
                    </div>
                    <Tabs
                        className={styles.tabsWrapper}
                        activeLineMode='fixed'
                        style={{
                            '--fixed-active-line-width': '20%',
                            '--active-line-height': '4px',
                            '--active-line-color': '#F75A53',
                            '--active-title-color': '#F75A53',
                            '--content-padding': '0rem',
                        }}
                    >
                        {
                            tabs.map(tab => (
                                <Tabs.Tab key={tab.key} title={tab.title}>
                                    <div style={{padding: '1rem', lineHeight: '2.4rem', color: '#808080'}}>
                                        {tab.content}
                                    </div>
                                </Tabs.Tab>
                            ))
                        }
                    </Tabs>
                </div>

                {/*资金安全透明...*/}
                <div className={styles.qualificationsWrapper}>
                    <div className={styles.qualificationItemWrapper}>
                        <img src={icQualification1} style={{width: '4rem'}}/>
                        <span>资金安全透明</span>
                    </div>
                    <div className={styles.qualificationItemWrapper}>
                        <img src={icQualification2} style={{width: '4rem'}}/>
                        <span>案件笔笔公开</span>
                    </div>
                    <div className={styles.qualificationItemWrapper}>
                        <img src={icQualification3} style={{width: '4rem'}}/>
                        <span>专业审核</span>
                    </div>
                </div>

                {/*常见问题*/}
                <div className={styles.collapsePanelContainer} style={{marginBottom: '1rem'}}>
                    <div className={styles.nameWrapper}>
                        <span>{collapsePanelData["qAndA"]['name']}</span>
                    </div>
                    <Collapse accordion>
                        {
                            (collapsePanelData['qAndA']['data'] || []).map((item, index) => {
                                return (
                                    <Collapse.Panel
                                        key={String(index)}
                                        title={<span style={{fontSize: '1.4rem', color: '#000'}}>{item?.title}<span
                                            style={{
                                                marginLeft: '2rem',
                                                color: '#7F7F7F',
                                            }}>{item?.subTitle}</span></span>}
                                    >
                                        <div className={styles.panelContentWrapper}>
                                            {item?.content}
                                        </div>
                                    </Collapse.Panel>
                                )
                            })
                        }
                    </Collapse>
                </div>

                <div className={styles.buttonGroupWrapper}>
                    <div className={styles.serviceButton} onClick={handleClickServiceButton}>
                        <img src={icOnlineService} style={{width: '2rem', marginRight: '1rem'}}/>
                        <span>客服</span>
                    </div>
                    <div className={styles.joinImmediateButton} onClick={handleClickJoinImmediateButton}>
                        立即加入
                    </div>
                </div>

            </div>
        </div>
    )
}


export default JoinForRelatives;