import React from "react";

// 이렇게도 Component에 스타일 입힐 수 있다
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16
    },
    imageContainer: {},
    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    }
}

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202104/20/ab7c9cda-2fca-4205-8d10-540f5851823f.jpg"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}

export default Comment;