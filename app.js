document.addEventListener('DOMContentLoaded', async () => {
  // Set Gregorian Date
  const gregorianDateElement = document.getElementById('gregorian-date');
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  gregorianDateElement.textContent = today.toLocaleDateString('en-US', options);

  // Set Hebrew Date
  const hebrewDateElement = document.getElementById('hebrew-date');
  const hdate = new HDate(today);
  hebrewDateElement.textContent = `${hdate.toString()} (${hdate.transliteration()})`;

  // Fetch Shabbat Times for the upcoming week
  try {
    console.log('Fetching Shabbat times...'); // Debug log
    const response = await fetch('https://www.hebcal.com/shabbat/?cfg=json&geonameid=2174003&m=50');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Shabbat times data:', data); // Debug log

    // Extract candle lighting and havdalah times
    const candleLighting = data.items.find((item) => item.category === 'candles');
    const havdalah = data.items.find((item) => item.category === 'havdalah');

    const shabbatTimesElement = document.getElementById('shabbat-times');

    // Check for both candle lighting and havdalah times
    if (candleLighting && havdalah) {
      let displayText = `🕯️ Candle Lighting: ${candleLighting.title.split(': ')[1]}`;

      // Include Havdalah time if available
      if (havdalah) {
        const havdalahTime = havdalah.title.split(': ')[1];
        displayText += ` | ✨ Havdalah: ${havdalahTime}`;
      }

      // Update the display with the times
      shabbatTimesElement.textContent = displayText;
    } else {
      // In case the times are missing, show a user-friendly message
      shabbatTimesElement.textContent = 'Shabbat times not found. Please try again later.';
    }
  } catch (error) {
    console.error('Error fetching Shabbat times:', error);
    document.getElementById('shabbat-times').textContent = 'Error loading times';
  }
});
