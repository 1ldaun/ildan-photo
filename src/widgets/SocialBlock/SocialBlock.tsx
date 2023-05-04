import React from "react";
import styles from "./SocialBlock.module.scss";

const SocialBlock = () => {
	return (
		<div className={styles.socialBlock}>
			<a
				href="https://t.me/d1sinterested"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fab fa-telegram-plane" />
			</a>
			<a
				href="https://vk.com/dis1nterested"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fa-brands fa-vk" />
			</a>
			<a
				href="mailto:sharfull33@gmail.ru"
				target="_blank"
				rel="noreferrer"
			>
				<i className="far fa-envelope" />
			</a>
			<a
				href="https://www.instagram.com/1ldown/"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fa-brands fa-instagram"></i>
			</a>
			<a
				href="https://github.com/stormrage-web"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fa-brands fa-github"></i>
			</a>
		</div>
	);
};

export default SocialBlock;
