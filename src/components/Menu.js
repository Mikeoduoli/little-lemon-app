import Swal from "sweetalert2";
import recipes from "../recipes"

const Menu = () => {
  const handleSOrder = (id) => {
    console.log("ID event clicked", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to reverse this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#385B5d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Place Order.'
    })
      .then((result) => {
        if(result.isConfirmed){
          Swal.fire(
            "Order Placed",
            "Your Order has been placed.",
            "success"
          )
        }
      })
  }

  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>Our Special Cuisines</h2>
        <button>Order Menu</button>
      </div>

      <div className="cards">
        {
          recipes.map(recipe => <div key={recipe.id} className="menu-items">
            <img
             src={recipe.image}
             alt='dishes'
            />

            <div className="menu-content">
              <div className="heading">
                <h4>{recipe.title}</h4>
                <p>{recipe.price}</p>
              </div>
            </div>
            
            <div>
              <p>{recipe.description}</p>
              <button className="orderBtn"
                onClick={() =>handleSOrder(recipe.id)}
              >
                Place Order
              </button>
            </div>
          </div>)
        }
      </div>

    </div>
  )
}

export default Menu
