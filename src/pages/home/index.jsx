import styles from './index.module.scss'
function HomePage() {
    const array = Array(100).fill(0).map((_, i) => `元素${i}`)
    return (
        <div className={styles.rootContainer}>
            {
                array.map((item, index) => (
                    <div key={index}>我是元素{item}</div>
                ))
            }
        </div>
    )
}

export default HomePage