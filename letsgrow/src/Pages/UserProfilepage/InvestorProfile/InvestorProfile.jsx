// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./investorProfile.css";

// export default function InvestorProfile() {
//   const [user, setUser] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const userData = JSON.parse(storedUser);
//       setUser(userData);
//       fetchProfileImage(userData.id);
//     }
//     setLoading(false);
//   }, []);

//   const fetchProfileImage = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:3001/get-profile-image/${userId}`, { responseType: 'blob' });
//       const imageURL = URL.createObjectURL(response.data);
//       setProfileImage(imageURL);
//     } catch (error) {
//       console.error("Error fetching image:", error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleImageUpload = async () => {
//     if (!user || !imagePreview) return alert("Please select an image first!");

//     const fileInput = document.getElementById("fileInput");
//     if (!fileInput.files[0]) return alert("No file selected!");

//     const formData = new FormData();
//     formData.append("profileImage", fileInput.files[0]);
//     formData.append("userId", user.id);

//     try {
//       await axios.post("http://localhost:3001/upload-profile-image", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       fetchProfileImage(user.id);
//       setImagePreview(null);
//       alert("Profile image updated successfully!");
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       alert("Failed to upload image. Try again.");
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {user ? (
//         <div id="investor-profile-content">
//           {/* Top Area */}
//           <div id="investor-profile-top-area">
//             <div id="investor-profile-dashboard-button">
//               <button>DASHBOARD</button>
//             </div>
//           </div>

//           {/* Middle Area */}
//           <div id="investor-profile-middle-area">
//             <div id="investor-profile-photo">
//               <img src={imagePreview || profileImage || "placeholder.png"} alt="Profile" />
//               <input type="file" id="fileInput" onChange={handleImageChange} onClick={handleImageUpload} accept="image/*" />
//             </div>
//             <div id="investor-profile-details">
//               <h1>{user.firstName} {user.lastName}</h1>
//               <h2>{user.role}</h2>
//               <h2>{user.email}</h2>
//               <h2>{user.phoneNumber}</h2>
//               <button id='investor-edit-button'>EDIT</button>
//             </div>
//           </div>

//           {/* bottom area */}
//          <div id="investor-profile-bottom-area">
//              <div id="investor-gig-title">
//                  <h1>My Articles</h1>
//              </div>
//              <div id="add-article">
//                  <button id='add-new-article'>Add +</button>
//              </div>

//          </div>
//         </div>
//       ) : (
//         <p>User not found.</p>
//       )}
//     </div>
//   );
// }



//=================================================================================

import React, { useState } from 'react';
import "./investorProfile.css";

export default function InvestorProfile() {
  const [user] = useState({
    id: 1,
    firstName: "John",
    lastName: "Doe",
    role: "Investor",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  });
  const [profileImage, setProfileImage] = useState("placeholder.png");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = () => {
    if (!imagePreview) {
      alert("Please select an image first!");
      return;
    }
    setProfileImage(imagePreview);
    setImagePreview(null);
    alert("Profile image updated successfully!");
  };

  return (
    <div>
      {user ? (
        <div id="investor-profile-content">
          {/* Top Area */}
          <div id="investor-profile-top-area">
            <div id="investor-profile-dashboard-button">
              <button>DASHBOARD</button>
            </div>
          </div>

          {/* Middle Area */}
          <div id="investor-profile-middle-area">
            <div id="investor-profile-photo">
              <img src={imagePreview || profileImage} alt="Profile" />
              <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                accept="image/*"
              />
              <button onClick={handleImageUpload}>Upload</button>
            </div>
            <div id="investor-profile-details">
              <h1>{user.firstName} {user.lastName}</h1>
              <h2>{user.role}</h2>
              <h2>{user.email}</h2>
              <h2>{user.phoneNumber}</h2>
              <button id="investor-edit-button">EDIT</button>
            </div>
          </div>

          {/* Bottom Area */}
          <div id="investor-profile-bottom-area">
            <div id="investor-gig-title">
              <h1>My Articles</h1>
            </div>
            <div id="add-article">
              <button id="add-new-article">Add +</button>
            </div>
          </div>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}