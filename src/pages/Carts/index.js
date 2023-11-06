import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/features/cartSlice";

const Carts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [seletedTitle, setSeletedTitle] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products?title"
        );
        setAllProducts(response.data);
        setFilteredCategory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const startIndex = page * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const paginatedData = allProducts
        .slice(startIndex, endIndex)
        .filter((item) => {
          const matchesCategory =
            selectedCategory === "all" || item.category === selectedCategory;
          const matchesTitle = item.title
            .toLowerCase()
            .includes(seletedTitle.toLowerCase());
          const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
          return matchesCategory && matchesTitle && matchesPrice;
        });
      setFilteredCategory(paginatedData);
    };

    filterProducts();
  }, [
    selectedCategory,
    seletedTitle,
    minPrice,
    maxPrice,
    page,
    rowsPerPage,
    allProducts,
  ]);

  const totalPages = Math.ceil(allProducts.length / rowsPerPage);
  const handleAddToCart = (product) => {
    // Dispatch the addToCart action with the selected product as payload
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 sm:p-8 md:p-10 lg:p-12">
        {filteredCategory.map((item) => (
          <div className="bg-white" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-[50vh] object-cover"
              />
            </Link>
            <div className="p-4 flex flex-col gap-6">
              <h3 className="mt-2 text-lg">{item.title}</h3>
              <div className="flex justify-between">
                <p className="mt-2">${item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="border border-gray-600 rounded-full px-4 py-2 mt-2 hover:bg-black hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination controls and page numbering */}
      <div className="flex justify-center mt-4 gap-10 py-[5vw]">
        {page > 0 && (
          <button
            onClick={() => setPage(page - 1)}
            className="mx-2 px-4 py-2 rounded-full bg-gray-800 text-white"
          >
            Previous
          </button>
        )}
        <p className="text-lg ">
          {page + 1} / {totalPages}
        </p>
        {(page + 1) * rowsPerPage < allProducts.length && (
          <button
            onClick={() => setPage(page + 1)}
            className="mx-2 px-4 py-2 rounded-full bg-gray-800 text-white"
          >
            Next
          </button>
        )}
      </div>
      <div className="p-[3vw] w-full text-center ">
        <Link to={'/cart-dets'}>
        <button className="p-[2vw] bg-black text-white hover:rounded-full transition-all ease-in-out delay-75">
          CLICK TO CHECK OUT CART
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Carts;
