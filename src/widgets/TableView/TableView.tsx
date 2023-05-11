import React, { FC } from "react";
import styles from "./TableView.module.scss";
import { IPicture } from "../../models/IPicture";
import { mainEndPoint } from "../../store/reducers/ActionCreators";

interface TableViewProps {
	pictures: IPicture[];
}

const TableView: FC<TableViewProps> = ({ pictures }: TableViewProps) => {
	return (
		<div className={styles.wrapper}>
			{pictures.map((picture) => (
				<div key={picture.id} className={styles.pictureItem}>
					<img
						src={mainEndPoint + picture.url}
						alt={picture.alt}
						className={styles.pictureItem__img}
					/>
				</div>
			))}
		</div>
	);
};

export default TableView;
