document.addEventListener('DOMContentLoaded', async function () {
  // ...existing code for Hebrew date and Omer count...

  // Fetch candle lighting and Havdalah times
  const location = 'Herzliya'; // Replace with your location
  const hebcalApiUrl = `https://www.hebcal.com/shabbat?cfg=json&geonameid=294778&M=on`;

  try {
    const response = await fetch(hebcalApiUrl);
    const data = await response.json();

    const candleLighting = data.items.find((item) => item.category === 'candles');
    const havdalah = data.items.find((item) => item.category === 'havdalah');

    const convertTo12Hour = (time24) => {
      const [hours, minutes] = time24.split(':').map(Number);
      const period = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    if (candleLighting) {
      const time24 = candleLighting.title.split(': ')[1];
      document.getElementById('candle-lighting-time').textContent = convertTo12Hour(time24);
    }

    if (havdalah) {
      const time24 = havdalah.title.split(': ')[1];
      document.getElementById('havdalah-time').textContent = convertTo12Hour(time24);
    }
  } catch (error) {
    console.error('Error fetching Shabbat times:', error);
    document.getElementById('candle-lighting-time').textContent = 'N/A';
    document.getElementById('havdalah-time').textContent = 'N/A';
  }
});

async function fetchShacharisTimes() {
  const zmanimApiUrl = 'https://www.hebcal.com/zmanim?cfg=json&geonameid=294778';

  try {
    const response = await fetch(zmanimApiUrl);
    const data = await response.json();

    document.getElementById('alos-time').textContent = data.times.alotHaShachar || 'N/A';
    document.getElementById('talis-time').textContent = data.times.misheyakir || 'N/A';
    document.getElementById('latest-shema-time').textContent = data.times.sofZmanShma || 'N/A';
    document.getElementById('latest-tefila-time').textContent = data.times.sofZmanTfilla || 'N/A';
  } catch (error) {
    console.error('Error fetching Shacharis times:', error);
    document.getElementById('alos-time').textContent = 'N/A';
    document.getElementById('talis-time').textContent = 'N/A';
    document.getElementById('latest-shema-time').textContent = 'N/A';
    document.getElementById('latest-tefila-time').textContent = 'N/A';
  }
}

document.addEventListener('DOMContentLoaded', fetchShacharisTimes);

document.addEventListener('DOMContentLoaded', function () {
  // Removed the Hebrew date rendering logic
  // document.getElementById('hebrew-date').textContent = hebcalDate;

  const omerCount = getOmer(new Date());
  document.getElementById('omer-count').textContent = `Omer ${omerCount}`;

  const shabbosDate = new Date();
  shabbosDate.setDate(shabbosDate.getDate() + (6 - shabbosDate.getDay()));
  document.getElementById('shabbos-date').textContent = `${shabbosDate.getMonth() + 1}/${shabbosDate.getDate()}`;

  // Replace with actual candle lighting and Havdalah times for your location
  document.getElementById('candle-lighting-time').textContent = '6:59 pm';
  document.getElementById('havdalah-time').textContent = '7:57 pm';
});
