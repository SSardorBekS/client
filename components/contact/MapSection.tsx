export const MapSection = () => {
    return (
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bizning manzil</h2>
        <div className="rounded-lg overflow-hidden h-[400px] shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.8246687077983!2d69.27891231547757!3d41.33392920706444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0x6b3d562c2b577ecc!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1637183839899!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    );
  };