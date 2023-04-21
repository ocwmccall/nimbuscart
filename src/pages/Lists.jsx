export default function Lists({ lists }) {

  console.log(lists)

    const handleClick = async (id) => {
    //   console.log(id)
    }
  
    return (
      <div className="book-list">
        <ul>
          {lists.map(list => (
            <li key={list.id} onClick={() => handleClick(list.id)}>{list.title}</li>
          ))}
        </ul>
      </div>
    )
  }