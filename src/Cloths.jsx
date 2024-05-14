import React from "react";

const Clothes = ({ product, menu, filterData }) => {
    return (
        <div align="center">
            <h1 class="m-4">Clothing Shop</h1>
            <button onClick={() => filterData("all")} className="btn btn-primary mx-2 btn-sm">All</button>
            {
                menu.map((Item) => {
                    return (
                        <button onClick={() => filterData(Item.name)} className="btn btn-primary mx-2 btn-sm" key={Item.id}>{Item.name}</button>
                    )
                })
            }
            <div className="container row mt-5">
                {
                    product.map((p, index) => {
                        return (
                            <div key={++index} className="col-3 mb-4">
                                <div className="card">
                                    <img src={p.img} height={350} width={200} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">{p.name}</h4>
                                        <p className="card-text">Rs. {p.price}</p>
                                        <p>MRP: <span>2499</span></p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Clothes