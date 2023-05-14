import React, { FC } from "react";
import styles from "./TableView.module.scss";
import { IPicture } from "../../models/IPicture";
import { mainEndPoint } from "../../store/reducers/ActionCreators";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cx from "classnames";

import "react-lazy-load-image-component/src/effects/blur.css";

interface TableViewProps {
	pictures: IPicture[];
}

const TableView: FC<TableViewProps> = ({ pictures }: TableViewProps) => {
	return (
		<div className={styles.wrapper}>
			{pictures.map((picture) => (
				<div key={picture.id} className={styles.pictureItem}>
					<LazyLoadImage
						src={mainEndPoint + picture.url}
						alt={picture.alt}
						className={cx(styles.pictureItem__img, "img-lazy")}
						effect="blur"
					/>
				</div>
			))}
		</div>
	);
};

export default TableView;
