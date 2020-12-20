import React, { useState } from "react";
import BackgroundImageWrapper from "../components/BackgroundImageWrapper";
import FullHeightWrapper from "../components/FullHeightWrapper";
import ProfileImage from "./../media/profile/update-profile.jpg";
import ProfilePlacholder from "./../media/profile/profile.svg";
import InputForm from "../components/InputForm";

function EditProfile() {
  const [imagePreview, setImagePreview] = useState(ProfilePlacholder);
  const [imagePreviewChecked, setImagePreviewChecked] = useState(false);

  const handleImagePreview = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);

    const objectUrl = URL.createObjectURL(file);
    setImagePreview(objectUrl);

    setImagePreviewChecked(true);
  };

  return (
    <FullHeightWrapper>
      <div className="edit-profile">
        <BackgroundImageWrapper
          userName="Abd Alwahab"
          componentTitle="Update Your Profile"
          imageSrc={ProfileImage}
        />

        <div className="edit-profile__form">
          <form id="profile-form">
            <div className="profile-select-photo">
              <div className="profile-image-preview--container">
                <img className="profile-image-preview" src={imagePreview} alt="user" />
              </div>

              <div className="select-input-container">
                <h4>Change Your Photo</h4>

                <input
                  className="profile-input-photo"
                  type="file"
                  name="photo"
                  onChange={handleImagePreview}
                />
              </div>
            </div>

            <div className="full-form-container">
              <div className="meduim-form">
                <InputForm
                  className="meduim-input p-b"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="meduim-form">
                <InputForm
                  className="meduim-input p-b"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <InputForm
              type="email"
              name="email"
              className="full-input p-m"
              placeholder="example@user.com"
            />

            <textarea name="bio" className="bio-input" />

            <button
              type="submit"
              className="btn-small btn-width-fixed btn-dark-gray btn btn-shadow"
            >
              Update Info
            </button>
          </form>
        </div>
      </div>
    </FullHeightWrapper>
  );
}

export default EditProfile;
