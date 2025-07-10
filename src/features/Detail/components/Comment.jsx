import React, { useState } from "react";
import SubTitle from "../../components/SubTitle";
import { FaTrashAlt } from "react-icons/fa";

function Comment() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(),
      name: "John Smith",
      message: input.trim(),
      time: "Baru saja",
      image:
        "https://images.unsplash.com/photo-1751810106007-907f11cbc15a?q=80&w=687&auto=format&fit=crop",
    };

    setComments([newComment, ...comments]);
    setInput("");
  };

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <SubTitle>Komentar</SubTitle>

      {/* Form Komentar */}
      <div className="w-full flex-col justify-start items-start gap-5 flex">
        <div className="w-full rounded-3xl justify-start items-start gap-3.5 inline-flex">
          <img
            className="w-10 h-10 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1751810106007-907f11cbc15a?q=80&w=687&auto=format&fit=crop"
            alt="John smith image"
          />
          <textarea
            rows="4"
            className="w-full max-w-lg px-5 py-3 rounded-2xl border border-gray-300 shadow resize-none focus:outline-none placeholder-gray-400 text-gray-900 text-lg"
            placeholder="Tulis komentar Anda..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="px-5 py-2.5 bg-color-primary hover:bg-indigo-800 transition-all duration-300 rounded-xl text-white font-semibold md:ml-12"
        >
          Kirim
        </button>
      </div>

      {/* Daftar Komentar */}
      <div className="w-full max-w-lg flex-col gap-8 flex mt-10">
        {comments.length === 0 && (
          <p className="text-gray-500">Belum ada komentar.</p>
        )}

        {comments.map((comment) => (
          <div
            key={comment.id}
            className="w-full pb-6 border-b border-gray-300 flex gap-3"
          >
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={comment.image}
              alt="User"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h5 className="text-sm font-semibold">{comment.name}</h5>
                <span className="text-xs text-gray-500">{comment.time}</span>
              </div>
              <p className="text-sm text-gray-800 mt-1">{comment.message}</p>

              <button
                onClick={() => handleDelete(comment.id)}
                className="text-red-500 text-xs mt-2 flex items-center gap-1 hover:underline cursor-pointer"
              >
                <FaTrashAlt />
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
