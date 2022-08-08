import styles from './SpecialComponent.module.css';

const SpecialComponent = (props) =>  {
    return (

        <div className={styles.card}>
            <div className={styles.contentBox}>
                <p className={styles.productInfo}> {props.name}</p>
                <p className={styles.productInfo}>Category</p>
            </div>
            <div className={styles.images}>
                <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250" className={styles.userImage} />
                <span className={styles.userInfo}>Username</span>
                <img src="http://www.foaminsulationni.com/images/placeholder/600x600.gif" alt="Product Image" className={styles.mouse} />
            </div>
            <div className={styles.contentBox}>
                <a href="#" className={styles.buy}>See Details</a>
            </div>
        </div>

    );
}
export default SpecialComponent