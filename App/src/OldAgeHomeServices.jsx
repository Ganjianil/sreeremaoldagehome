import React, { useState } from "react"; // Assuming you might still have BookingModal logic, keep useState
import "./OldAgeHomeServices.css";
import BookingModal from "./BookingModal"; // Assuming this is still part of the setup
import "./BookingModal.css";
import lux from "/luxary.jpg"
import srlux from "/srlux.jpg"
// Data for the services
const servicesData = [
  {
    id: 1,
    title: "Comprehensive Bedridden Care",
    description:
      "Specialized 24/7 care for bedridden residents, focusing on comfort, hygiene, and medical needs with utmost compassion.",
    imageUrl:
      "https://images.pexels.com/photos/7551619/pexels-photo-7551619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Caring for a bedridden senior resident",
  },
  {
    id: 2,
    title: "Vibrant Senior Citizen Living",
    description:
      "An engaging community for active seniors, offering social activities, wellness programs, and a comfortable, independent lifestyle.",
    imageUrl:
      "https://images.pexels.com/photos/8972339/pexels-photo-8972339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Active senior citizens enjoying an activity",
  },
  {
    id: 3,
    title: "Dedicated NRI Services",
    description:
      "Peace of mind for NRIs with dedicated support for their elderly parents, including regular updates, healthcare coordination, and personalized attention.",
    imageUrl:
     lux,
    altText: "Senior couple communicating online, representing NRI services",
  },
  {
    id: 4,
    title: "Holistic Wellness Programs",
    description:
      "Promoting physical and mental well-being through tailored fitness routines, therapeutic activities, and nutritional guidance.",
    imageUrl:
      "https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Senior participating in a wellness activity like yoga",
  },
  {
    // New Service Added Here
    id: 5,
    title: "Luxury Senior Living & Suites",
    description:
      "Experience unparalleled comfort and elegance with our premium suites, fine dining, concierge services, and exclusive amenities for a distinguished lifestyle.",
    // Replace with an actual image representing luxury senior living
    imageUrl:
      srlux, // Example: a very nice common room or suite
    altText: "Elegant suite in a luxury old age home",
  },
];

// Modified ServiceCard to include onBookNowClick prop
const ServiceCard = ({
  title,
  description,
  imageUrl,
  altText,
  onBookNowClick,
}) => {
  return (
    <div className="oah-service-card">
      <div className="oah-service-card-image-container">
        <img src={imageUrl} alt={altText} className="oah-service-card-image" />
      </div>
      <div className="oah-service-card-content">
        <h3 className="oah-service-card-title">{title}</h3>
        <p className="oah-service-card-description">{description}</p>
        <button
          onClick={() => onBookNowClick(title)}
          className="oah-service-card-button"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

const OldAgeHomeServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("");

  const handleOpenModal = (serviceTitle) => {
    setSelectedServiceTitle(serviceTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedServiceTitle("");
  };

  return (
    <>
      <section className="oah-services-section">
        <div className="oah-services-container">
          <h2 className="oah-services-main-title">
            Our Specialized Care Services
          </h2>
          <p className="oah-services-subtitle">
            Tailored support for every stage of senior living, ensuring dignity,
            comfort, and joy.
          </p>
          <div className="oah-services-grid">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                altText={service.altText}
                onBookNowClick={handleOpenModal} // Pass the handler
              />
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceTitle={selectedServiceTitle}
      />
    </>
  );
};

export default OldAgeHomeServices;
