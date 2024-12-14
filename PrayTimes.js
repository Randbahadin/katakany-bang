function calculatePrayerTimes(lat, lng) {
  const prayTimes = new PrayTimes();
  prayTimes.setMethod('Karachi'); // You can choose a different calculation method if needed
  const times = prayTimes.getTimes(new Date(), [lat, lng], 0); // Adjust the time zone offset if necessary

  const prayerTimes = {
    Fajr: times.fajr,
    Sunrise: times.sunrise,
    Dhuhr: times.dhuhr,
    Asr: times.asr,
    Maghrib: times.maghrib,
    Isha: times.isha
  };

  displayPrayerTimes(prayerTimes);
}
