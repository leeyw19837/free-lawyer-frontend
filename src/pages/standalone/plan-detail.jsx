import styles from './plan-detail.module.scss'
import {useParams} from "react-router";

function PlanDetail() {
    const params = useParams()
    console.log('params = ', params)
    return (
        <div className={styles.rootContainer}>
            计划详情：{params.id}
        </div>
    )
}

export default PlanDetail;
