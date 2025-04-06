import React, { useState, useEffect } from "react";
import "./profileSettings.css";
import {
  FaUser, FaPhone, FaMapMarkerAlt, FaEnvelope, FaTags,
  FaMoneyBillWave, FaImage, FaEdit, FaCheck, FaTimes, FaPlus
} from "react-icons/fa";

const ProfileSettings = () => {
  const [isEditing, setIsEditing] = useState({
    category: false,
    email: false,
    address: false,
    priceRange: false
  });

  const [values, setValues] = useState({
    name: "",
    category: "",
    priceRange: "",
    email: "",
    address: "",
    contactNumbers: [],
    profilePicture: ""
  });

  const [tempValues, setTempValues] = useState({
    category: "",
    priceRange: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const categories = ["Basic", "Standard", "Premium", "VIP"];
  const priceRanges = ["Low", "Medium", "High"];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/${localStorage.getItem('userId')}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        if (!response.ok) throw new Error('Failed to fetch profile');
        
        const data = await response.json();
        setValues({
          name: data.name,
          category: data.category,
          priceRange: data.price_range,
          email: data.email,
          address: data.address,
          contactNumbers: data.contactNumbers,
          profilePicture: data.profile_picture
        });
        setTempValues({
          category: data.category,
          priceRange: data.price_range
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = async (field) => {
    try {
      const formData = new FormData();
      const fileInput = document.getElementById('profilePicture');
      
      if (fileInput?.files[0]) {
        formData.append('profilePicture', fileInput.files[0]);
      }

      const updatedValues = {
        ...values,
        [field]: tempValues[field]
      };

      Object.entries(updatedValues).forEach(([key, value]) => {
        if (key !== 'profilePicture') {
          formData.append(key, value);
        }
      });

      formData.append('contactNumbers', JSON.stringify(updatedValues.contactNumbers));

      const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/${localStorage.getItem('userId')}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      if (!response.ok) throw new Error('Update failed');
      
      const data = await response.json();
      setValues(updatedValues);
      setIsEditing((prev) => ({ ...prev, [field]: false }));
      setSuccess('Profile updated successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(''), 5000);
    }
  };

  const handleCancel = (field) => {
    setTempValues((prev) => ({ ...prev, [field]: values[field] }));
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (e, field) => {
    setTempValues({ ...tempValues, [field]: e.target.value });
  };

  const handleContactChange = (index, value) => {
    const updatedContacts = [...values.contactNumbers];
    updatedContacts[index] = value;
    setValues({ ...values, contactNumbers: updatedContacts });
  };

  const addNewContact = () => {
    setValues({ ...values, contactNumbers: [...values.contactNumbers, ""] });
  };

  if (loading) return <div className="loading">Loading profile...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="profile-settings">
      <h2 className="title">⚙️ Settings</h2>
      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}

      {/* Personal Details */}
      <section className="section">
        <h3>Personal Details</h3>
        <div className="item">
          <FaUser className="icon" />
          <span>{values.name}</span>
        </div>
        <div className="item">
          <FaImage className="icon" />
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              if (e.target.files[0]) {
                setValues({
                  ...values,
                  profilePicture: URL.createObjectURL(e.target.files[0])
                });
              }
            }}
          />
          <button 
            className="upload-button"
            onClick={() => document.getElementById('profilePicture').click()}
          >
            Upload New Photo
          </button>
          {values.profilePicture && (
            <img 
              src={values.profilePicture} 
              alt="Profile" 
              className="profile-preview" 
            />
          )}
        </div>
      </section>

      {/* Contact Details */}
      <section className="section">
        <h3>Contact Details</h3>
        {values.contactNumbers.map((contact, index) => (
          <div className="item" key={index}>
            <FaPhone className="icon" />
            <input
              type="text"
              value={contact}
              onChange={(e) => handleContactChange(index, e.target.value)}
              className="edit-input"
              placeholder="Enter contact number"
            />
          </div>
        ))}
        <button className="add-button" onClick={addNewContact}>
          <FaPlus /> Add Another Number
        </button>
        <div className="item">
          <FaMapMarkerAlt className="icon" />
          {isEditing.address ? (
            <>
              <input
                type="text"
                value={values.address}
                onChange={(e) => setValues({ ...values, address: e.target.value })}
                className="edit-input"
              />
              <FaCheck 
                className="save-icon" 
                onClick={() => handleSave('address')} 
              />
              <FaTimes 
                className="cancel-icon" 
                onClick={() => handleCancel('address')} 
              />
            </>
          ) : (
            <>
              <span>{values.address}</span>
              <FaEdit 
                className="edit-icon" 
                onClick={() => handleEditClick('address')} 
              />
            </>
          )}
        </div>
        <div className="item">
          <FaEnvelope className="icon" />
          {isEditing.email ? (
            <>
              <input
                type="email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                className="edit-input"
              />
              <FaCheck 
                className="save-icon" 
                onClick={() => handleSave('email')} 
              />
              <FaTimes 
                className="cancel-icon" 
                onClick={() => handleCancel('email')} 
              />
            </>
          ) : (
            <>
              <span>{values.email}</span>
              <FaEdit 
                className="edit-icon" 
                onClick={() => handleEditClick('email')} 
              />
            </>
          )}
        </div>
      </section>

      {/* Category */}
      <section className="section">
        <h3>Category</h3>
        <div className="item">
          <FaTags className="icon" />
          {isEditing.category ? (
            <>
              <select
                value={tempValues.category}
                onChange={(e) => handleChange(e, "category")}
                className="edit-dropdown"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
              <FaCheck 
                className="save-icon" 
                onClick={() => handleSave("category")} 
              />
              <FaTimes 
                className="cancel-icon" 
                onClick={() => handleCancel("category")} 
              />
            </>
          ) : (
            <>
              <span>{values.category}</span>
              <FaEdit 
                className="edit-icon" 
                onClick={() => handleEditClick("category")} 
              />
            </>
          )}
        </div>
      </section>

      {/* Price Range */}
      <section className="section">
        <h3>Pricing</h3>
        <div className="item">
          <FaMoneyBillWave className="icon" />
          {isEditing.priceRange ? (
            <>
              <select
                value={tempValues.priceRange}
                onChange={(e) => handleChange(e, "priceRange")}
                className="edit-dropdown"
              >
                {priceRanges.map((range, index) => (
                  <option key={index} value={range}>{range}</option>
                ))}
              </select>
              <FaCheck 
                className="save-icon" 
                onClick={() => handleSave("priceRange")} 
              />
              <FaTimes 
                className="cancel-icon" 
                onClick={() => handleCancel("priceRange")} 
              />
            </>
          ) : (
            <>
              <span>{values.priceRange}</span>
              <FaEdit 
                className="edit-icon" 
                onClick={() => handleEditClick("priceRange")} 
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfileSettings;