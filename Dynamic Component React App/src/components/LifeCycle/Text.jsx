 import { useEffect } from "react";
 
 function Text(){
    useEffect(()=>{
        document.title = "Text Component"  // this is a side effect so it is called in the useEffect hook to perform side effect in legal .
    })
    return (
        <div>
             <h2>Text Component</h2>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laudantium consectetur reprehenderit placeat commodi sit, maiores quisquam quos at velit minima pariatur nostrum amet aut sequi, natus modi? Ab sit molestiae doloribus odio placeat nobis velit, quas expedita officiis impedit, corrupti fuga, labore perspiciatis ex eum ipsum. Odio at libero quam et quos porro, velit provident, aut, praesentium esse autem harum? Voluptatem, similique! Esse aliquam quam beatae magni vel veniam modi facere nesciunt ex atque porro, animi alias sequi, eveniet velit voluptates. Maxime nihil corrupti sit quaerat voluptate obcaecati aliquam excepturi maiores. Beatae voluptas odio in libero perferendis pariatur, enim tenetur nostrum quae. Accusantium reprehenderit sapiente quia inventore, soluta quasi excepturi consequatur amet. Repudiandae cum ad reiciendis, sequi sint consequuntur dolorum? Soluta eum voluptatum nesciunt quos hic vel eos vero accusantium velit molestiae praesentium, culpa necessitatibus veritatis saepe error aliquid. Magni inventore quam repudiandae numquam iste repellendus id, soluta nam ex voluptas. Quis, doloribus eum facere qui sed voluptatem quia consequatur nostrum libero eligendi officiis ipsa nihil error fugit corrupti accusantium non vitae dolor dicta! A similique provident, impedit unde accusamus dolorum repellat officiis praesentium enim hic eligendi, fugiat fuga odio saepe dolore temporibus laboriosam ducimus. Sint itaque nobis, asperiores ducimus eligendi ea, nisi, perferendis quisquam temporibus vero ratione nam? Quibusdam ipsa distinctio tenetur, exercitationem quas molestias doloremque accusantium est aut assumenda nisi quis deleniti officiis inventore itaque id quaerat temporibus! Possimus eveniet optio corrupti qui aliquam unde ullam laudantium voluptatem eius consectetur cum deserunt corporis iure voluptatum vel magni facilis iusto esse, rerum praesentium cupiditate veritatis odit recusandae cumque? Consequatur architecto saepe ea beatae mollitia, porro quia expedita magnam quis excepturi blanditiis reiciendis vel at dolor doloribus deserunt odit consequuntur nihil libero earum officia consectetur deleniti laudantium? Hic, necessitatibus obcaecati iusto aspernatur pariatur sequi totam porro repellendus architecto provident?</p>
        </div>
    )
 }

export default Text;
