import styles from "./Home.module.css"

export default function Home() {
    return (
            <div className={styles['home-first-div']}>
                <div className={styles["home-second-div"]} >
                    <div className="">
                        <h2 className={styles["home-h2"]}>Welcome to our travel app</h2>
                        <div className="mb-4" />
                    </div>
                </div>
                <div className={styles["home-third-div"]}>
                        <div className={styles["home-forth-div"]}>
                            <div className="mb-4">
                                <div className={styles["home-fifth-div"]}>
                                    <h3>&#10003; That&apos;s your fast and easy decision for comfortable travelling!</h3>
                                    <h3>&#10003; With our help you alone can choose with who, when and how to go to you desired/wanted destination.</h3>
                                    <h3>&#10003; Make your ordinary and boring traveling alone in sweetly and shared adventure, make new acquaintance, why not
                                        friendships?</h3>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )
}