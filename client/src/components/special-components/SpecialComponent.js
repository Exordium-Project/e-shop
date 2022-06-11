import styles from './SpecialComponent.css';

export default function SpecialComponent() {
    return (
        <div className="wrapper">
            <a className={styles.userAvatar} href="#">
                <img src='https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg' alt="Avatar Image" class="avatar" />
            </a>

            <h1 className={styles.name}>Name of User</h1>

            <img className={styles.productImage}
                src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
                alt="Image" />

            <button className={styles.specialItemButton}> More Details </button>
        </div>
    );
}