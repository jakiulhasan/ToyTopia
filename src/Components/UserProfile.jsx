import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  const { user, setUser, updateUserProfile, loading } = use(AuthContext);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateUserProfile({ displayName: name, photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        const updatedUser = { ...user, displayName: name, photoURL };
        setUser(updatedUser);
        document.getElementById("my_modal_2").close();
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile");
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto max-w-7xl max-w-4xl py-10">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <div className="border border-base-300 mx-auto p-6 shadow-md rounded-2xl bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center text-pink-600">
          User Profile
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <div className="shrink-0">
            <img
              src={
                user?.photoURL || "https://i.ibb.co/6sX4vM9/default-profile.png"
              }
              className="w-40 h-40 object-cover rounded-full shadow-md border border-gray-200"
              alt="Profile"
            />
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div>
              <p className="font-semibold text-gray-500 text-sm">Name</p>
              <p className="text-xl font-bold text-gray-800">
                {user?.displayName || "No name set"}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">Email</p>
              <p className="text-xl font-bold text-gray-800">
                {user?.email || "No email available"}
              </p>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="btn bg-pink-500 hover:bg-pink-600 text-white px-5"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg text-center text-gray-700">
            Update Your Profile
          </h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full my-4 space-y-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photoURL"
                type="text"
                defaultValue={user?.photoURL}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />

              <button
                type="submit"
                className="btn btn-neutral w-full mt-4 hover:opacity-90"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default UserProfile;
