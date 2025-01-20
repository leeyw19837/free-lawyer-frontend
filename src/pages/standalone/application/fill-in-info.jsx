// 我的-报案-申请-第三页（填写信息）
import styles from './fill-in-info.module.scss'
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import PageNavigation from "../../../components/page-navigation.jsx";
import {CheckCircleFill} from "antd-mobile-icons";
import {Button, Cascader, Checkbox, DatePicker, Input, Radio, TextArea, Toast} from "antd-mobile";

export const mockOptions = [
    {
        label: '浙江',
        value: '浙江',
        children: [
            {
                label: '杭州',
                value: '杭州',
                children: [
                    {
                        label: '西湖区',
                        value: '西湖区',
                    },
                    {
                        label: '上城区',
                        value: '上城区',
                    },
                    {
                        label: '余杭区',
                        value: '余杭区',
                    },
                ],
            },
            {
                label: '温州',
                value: '温州',
                children: [
                    {
                        label: '鹿城区',
                        value: '鹿城区',
                    },
                    {
                        label: '龙湾区',
                        value: '龙湾区',
                    },
                    {
                        label: '瓯海区',
                        value: '瓯海区',
                    },
                ],
            },
            {
                label: '宁波',
                value: '宁波',
                children: [
                    {
                        label: '海曙区',
                        value: '海曙区',
                    },
                    {
                        label: '江北区',
                        value: '江北区',
                    },
                    {
                        label: '镇海区',
                        value: '镇海区',
                    },
                ],
            },
        ],
    },
    {
        label: '安徽',
        value: '安徽',
        children: [
            {
                label: '合肥',
                value: '合肥',
                children: [
                    {
                        label: '包河区',
                        value: '包河区',
                    },
                    {
                        label: '蜀山区',
                        value: '蜀山区',
                    },
                    {
                        label: '瑶海区',
                        value: '瑶海区',
                    },
                ],
            },
            {
                label: '芜湖',
                value: '芜湖',
                children: [
                    {
                        label: '镜湖区',
                        value: '镜湖区',
                    },
                    {
                        label: '弋江区',
                        value: '弋江区',
                    },
                    {
                        label: '湾沚区',
                        value: '湾沚区',
                    },
                ],
            },
        ],
    },
    {
        label: '江苏',
        value: '江苏',
        children: [
            {
                label: '南京',
                value: '南京',
                children: [
                    {
                        label: '玄武区',
                        value: '玄武区',
                    },
                    {
                        label: '秦淮区',
                        value: '秦淮区',
                    },
                    {
                        label: '建邺区',
                        value: '建邺区',
                    },
                ],
            },
            {
                label: '苏州',
                value: '苏州',
                children: [
                    {
                        label: '虎丘区',
                        value: '虎丘区',
                    },
                    {
                        label: '吴中区',
                        value: '吴中区',
                    },
                    {
                        label: '相城区',
                        value: '相城区',
                    },
                ],
            },
        ],
    },
]

function FillInInfo() {
    const params = useParams();
    const navigate = useNavigate();
    // console.log('params = ', params)
    const [detailData, setDetailData] = useState({})

    // 地区
    const [selectedArea, setSelectedArea] = useState('')
    // 单位名称
    const [selectedCompany, setSelectedCompany] = useState('')
    // 日期控件-显示状态
    const [datePickerVisible, setDatePickerVisible] = useState(false)
    // 日期时间
    const [selectedDate, setSelectedDate] = useState('')
    // 联系人姓名
    const [contactName, setContactName] = useState('')
    // 联系电话
    const [contactPhone, setContactPhone] = useState('')

    // todo: 获取详情数据
    useEffect(() => {
        const fetchData = async () => {
            const result = await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        data: {
                            id: params.id,
                            userName: '用户Mock',
                            idNumber: '410224198710145603',
                            joinDate: dayjs().format('YYYY-MM-DD'),
                            validDate: dayjs().format('YYYY-MM-DD'),
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

    // 监听 选择地区事件
    const handleSelectArea = async () => {
        const result = await Cascader.prompt({
            options: mockOptions,
            title: '',
        })
        console.log('handleSelectArea selected:', result)
        setSelectedArea(result.join('-'))
    }

    // 监听 选择日期时间
    const handleSelectDate = () => {
        setDatePickerVisible(true)
    }

    // 监听充值点击事件
    const handleSubmitInfo = () => {
        console.log('handleSubmitInfo called')
        Toast.show('信息提交成功！')
        setTimeout(() => {
            navigate('/about', {
                replace: true,
            })
        })
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title='填写信息'
            />
            <div style={{overflow: 'auto', width: '100%', height: 'calc(100vh - 10rem)'}}>
                {/*请如实填写以下信息*/}
                <div className={styles.detailWrapper}>
                    <span>请如实填写以下信息：</span>
                </div>

                {/*会员信息*/}
                <div className={styles.contentWrapper}>
                    <div className={styles.contentTitleWrapper}>
                        <span>会员信息</span>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>互助计划</div>
                            <div className={styles.mContent}>免费请律师互助计划（60元5年版）</div>
                        </div>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>姓名</div>
                            <div className={styles.mContent}>王站粟</div>
                        </div>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>身份证号</div>
                            <div className={styles.mContent}>410223198902266533</div>
                        </div>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>居住地</div>
                            <div
                                className={styles.mContent}
                                style={{color: selectedArea ? '#010101' : '#909090'}}
                                onClick={handleSelectArea}>
                                {selectedArea || '请选择居住地'}
                            </div>
                        </div>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>单位</div>
                            <Input
                                className={styles.mContent}
                                style={{
                                    '--placeholder-color': '#909090',
                                    '--font-size': '1.4rem',
                                }}
                                value={selectedCompany}
                                onChange={setSelectedCompany}
                                placeholder={'请填写单位名称（没有请填“无”）'}/>
                        </div>
                    </div>
                </div>

                {/*事件信息*/}
                <div className={styles.contentWrapper}>
                    <div className={styles.contentTitleWrapper}>
                        <span>事件信息</span>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>事件类型</div>
                            <div className={styles.mContent}>
                                <Radio.Group defaultValue={'minshi'}>
                                    <Radio
                                        value={'minshi'}
                                        style={{
                                            '--font-size': '1.4rem',
                                            '--icon-size': '1.8rem',
                                        }}
                                        icon={checked => checked ? <CheckCircleFill color={'red'}/> :
                                            <UnCheckedCircle/>}
                                    >民事案件</Radio>
                                    <Radio
                                        value={'xingshi'}
                                        style={{
                                            '--font-size': '1.4rem',
                                            '--icon-size': '1.8rem',
                                            marginLeft: '2rem'
                                        }}
                                        icon={checked => checked ? <CheckCircleFill color={'red'}/> :
                                            <UnCheckedCircle/>}
                                    >刑事案件</Radio>
                                </Radio.Group>

                            </div>
                        </div>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>事件时间</div>
                            <div
                                className={styles.mContent}
                                style={{color: selectedDate ? '#010101' : '#909090'}}
                                onClick={handleSelectDate}>
                                {selectedDate || '点击选择时间'}
                            </div>
                        </div>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>事件经过</div>
                            <TextArea
                                className={styles.mContent}
                                style={{
                                    '--placeholder-color': '#909090',
                                    '--font-size': '1.4rem',
                                }}
                                value={selectedCompany}
                                autoSize={{minRows: 3, maxRows: 5}}
                                onChange={setSelectedCompany}
                                placeholder={'请简单描述事件经过（时间、地点、具体情况）'}/>
                        </div>
                    </div>
                </div>

                {/*联系人信息*/}
                <div className={styles.contentWrapper}>
                    <div className={styles.contentTitleWrapper}>
                        <span>联系人信息</span>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>联系人</div>
                            <Input
                                className={styles.mContent}
                                style={{
                                    '--placeholder-color': '#909090',
                                    '--font-size': '1.4rem',
                                }}
                                value={contactName}
                                onChange={value => setContactName(value)}
                                placeholder={'请填写联系人姓名'}/>
                        </div>
                        <div className={styles.contentItemWrapper}>
                            <div className={styles.mTitle}>联系电话</div>
                            <Input
                                className={styles.mContent}
                                style={{
                                    '--placeholder-color': '#909090',
                                    '--font-size': '1.4rem',
                                }}
                                value={contactPhone}
                                onChange={value => setContactPhone(value)}
                                placeholder={'请填写联系电话'}/>
                        </div>
                    </div>
                </div>

                {/*同意协议*/}
                <div className={styles.agreementWrapper}>
                    <Checkbox
                        value={'minshi'}
                        style={{
                            '--font-size': '1.4rem',
                            '--icon-size': '1.8rem',
                        }}
                        icon={checked => checked ? <CheckCircleFill color={'red'}/> :
                            <UnCheckedCircle/>}
                    >我已仔细阅读、充分理解并同意：</Checkbox>
                    <div className={styles.agreementContent}>
                        <span>我保证以上信息均真实有效，无虚假和隐瞒，否则视为自动 放弃申请互助金的权利。</span>
                    </div>
                </div>

                <Button className={styles.chargeButton} onClick={handleSubmitInfo}>
                    提交信息
                </Button>
            </div>

            <DatePicker
                title=''
                visible={datePickerVisible}
                onClose={() => {
                    setDatePickerVisible(false)
                }}
                max={new Date()}
                onConfirm={val => {
                    // Toast.show(val.toDateString())
                    setSelectedDate(dayjs(val).format('YYYY-MM-DD'))
                }}
            />
        </div>
    )
}

const UnCheckedCircle = () => {
    return (
        <div style={{
            width: '1.6rem',
            height: '1.6rem',
            borderRadius: '1rem',
            border: '1px solid #cccccc',
            backgroundColor: '#fff',
        }}>

        </div>
    )
}

export default FillInInfo;
