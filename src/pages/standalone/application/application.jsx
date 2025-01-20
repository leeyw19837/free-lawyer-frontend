// 我的-报案-申请首页
import styles from './application.module.scss';
import PageNavigation from "../../../components/page-navigation.jsx";
import {Swiper, Toast} from "antd-mobile";
import imgApplicationFlow from "../../../assets/images/img_application_flow.png";
import {useNavigate} from "react-router";

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

function ApplicationPage() {
    const navigate = useNavigate();
    // 申请记录
    const handleApplicationRecord = () => {

    }

    // 立即申请
    const handleApply = () => {
        navigate('/report-suitcase/apply-for-who')
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={'申请首页'}
            />

            <div className={styles.swiperContainer}>
                <Swiper>{items}</Swiper>
            </div>

            <div className={styles.conditionWrapper}>
                <span className={styles.titleWrapper}>
                    申请条件
                </span>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentItemWrapper}>
                        <div className={styles.dottedCircle}>1</div>
                        <span className={styles.conditionText}>确认是否符合约定所申请互助计划的互助内容以及详细规则的规定，如果不符合则不具备申请资格。</span>
                    </div>
                    <div className={styles.contentItemWrapper}>
                        <div className={styles.dottedCircle}>2</div>
                        <span className={styles.conditionText}>确认是否已过等待期，生效后首次发生的风险事故方可申请，反之不具备申请资格。</span>
                    </div>
                    <div className={styles.contentItemWrapper}>
                        <div className={styles.dottedCircle}>3</div>
                        <span className={styles.conditionText}>为证明互助事件的真实性，需要委托第三方公司对互助事件进行实地查勘审核。</span>
                    </div>
                </div>
            </div>

            <div className={styles.operationWrapper}>
                <div className={styles.recordButton} onClick={handleApplicationRecord}>
                    申请记录
                </div>
                <div className={styles.applyButton} onClick={handleApply}>
                    立即申请
                </div>
            </div>
        </div>
    )
}

const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
        <div
            className={styles.swiperItemWrapper}
            style={{background: color}}
            onClick={() => {
                Toast.show(`你点击了卡片 ${index + 1}`)
            }}
        >
            <img src={imgApplicationFlow} alt="" style={{width: '100%'}}/>
        </div>
    </Swiper.Item>
))


export default ApplicationPage;