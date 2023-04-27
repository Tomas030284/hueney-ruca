import * as Controllers from "./controllers";

export async function handlerGet(req, res) {
  try {
    const comments = await Controllers.getAllComments();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handlerPost(req, res) {
  const body = req.body;
  try {
    const postComent = await Controllers.postNewComment(body);
    return res.status(200).json(postComent);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

export async function handlerPut(req, res) {
  const body = req.body;
  try {
    const updateComment = await Controllers.updateComment(body);
    return res.status(200).json(updateComment);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

export async function handlerDelete(req, res) {
  const body = req.body;
  try {
    const response = await Controllers.deleteComment(body);
    return res.status(200)
      .json({ message: "Comment successfully removed" });
  } catch (error) {
    return res.status(500).json({ error: error.mesage });
  }
}
