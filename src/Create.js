import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('hello');
  const [body, setBody ] = useState('hello');
  const [author, setAuthor ] = useState('mario');
  const [isPending, setIsPending ] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
     let blog = { title, body, author}

     setIsPending(true)

     fetch('http://localhost:8000/blogs', {
       method: 'POST',
       headers: {'Content-Type': "application/json" },
       body: JSON.stringify(blog)

     }).then(() => {
       console.log('new blog added')
       setIsPending(false)
       // history.go(-1)
       //
       history.push('/')
     })


  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e)=> setBody(e.target.value)}>
        </textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario" > mario </option>
          <option value="Jesjo" > Jesjo </option>
        </select>
        { !isPending && <button type="submit">Add Blog</button>}
        { isPending && <button disabled>Add Blog</button>}
      </form>

    </div>
  )
}

export default Create;
