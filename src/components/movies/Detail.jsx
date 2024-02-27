import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const Detail = (props) => {
  const style = {
    position: "absolute",
    top: "10%",
    left: "5%",
    width: 1200,
    height: 500,
    display: "flex",
    overflow: "scroll",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };

  const { elem, open, handleClose } = props;
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [movieId, setMovieId] = useState(null); // Хранение id текущего фильма

  useEffect(() => {
    // Получение сохраненных комментариев из локального хранилища по id фильма
    const storedComments =
      JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
    setComments(storedComments);

    // Получение сохраненного количества лайков из локального хранилища по id фильма
    const storedLikes =
      JSON.parse(localStorage.getItem(`likes_${movieId}`)) || 0;
    setLikes(storedLikes);
  }, [movieId]);

  useEffect(() => {
    // Установка id текущего фильма при открытии детальной информации
    if (open) {
      setMovieId(elem.id);
    }
  }, [open, elem]);

  const handleLike = () => {
    // Увеличение количества лайков на 1
    setLikes(likes + 1);
    // Сохранение количества лайков в локальное хранилище по id фильма
    localStorage.setItem(`likes_${movieId}`, JSON.stringify(likes + 1));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    // Добавление нового комментария в список комментариев
    const newComments = [...comments, comment];
    setComments(newComments);
    // Сохранение обновленного списка комментариев в локальное хранилище по id фильма
    localStorage.setItem(`comments_${movieId}`, JSON.stringify(newComments));
    setComment("");
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={style}>
        <div>
          <img width={200} src={elem.image} alt={elem.title} />
        </div>
        <div style={{ marginLeft: "15px" }}>
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <iframe
            id="fancybox-frame"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            name="fancybox-frame1707985548812"
            frameborder="0"
            width={"500px"}
            height={"150px"}
            hspace="0"
            scrolling="auto"
            src={elem.video}
          ></iframe>
          <p style={{ fontWeight: "bold" }}>{elem.price} сом</p>
          <div>
            <Button onClick={handleLike} variant="outlined" color="primary">
              Лайк ({likes})
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ marginLeft: "10px" }}
            >
              Купить за {elem.price} сом
            </Button>
          </div>
          <div
            style={{ marginTop: "20px", display: "flex", alignItems: "center" }}
          >
            <TextField
              value={comment}
              onChange={handleCommentChange}
              label="Добавить комментарий"
              multiline
              fullWidth
              variant="outlined"
            />
            <Button
              onClick={handleAddComment}
              variant="contained"
              color="secondary"
              style={{ marginLeft: "10px" }}
            >
              Добавить комментарий
            </Button>
          </div>
          <div>
            <h3>Комментарии:</h3>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;
