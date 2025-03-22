function drawLottery() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const count = parseInt(document.getElementById("count").value);
    const resultDiv = document.getElementById("winners");
    const loadingText = document.getElementById("loading");
  
    if (isNaN(start) || isNaN(end) || isNaN(count) || start >= end || count <= 0 || (end - start + 1) < count) {
      resultDiv.innerHTML = "<span style='color: red;'>مقادیر وارد شده درست نیست!</span>";
      resultDiv.classList.remove("hidden");
      loadingText.classList.add("hidden");
      return;
    }
  
    // نمایش انیمیشن در حال انتخاب
    resultDiv.classList.add("hidden");
    loadingText.classList.remove("hidden");
    resultDiv.innerHTML = "";
  
    // شبیه‌سازی زمان انتخاب
    setTimeout(() => {
      const range = [];
      for (let i = start; i <= end; i++) {
        range.push(i);
      }
  
      const winners = [];
      for (let i = 0; i < count; i++) {
        const randIndex = Math.floor(Math.random() * range.length);
        winners.push(range[randIndex]);
        range.splice(randIndex, 1);
      }
  
      loadingText.classList.add("hidden");
      resultDiv.innerHTML = `🎉 برنده‌ها: <strong>${winners.join(" - ")}</strong>`;
      resultDiv.classList.remove("hidden");
    }, 1500); // ۱.۵ ثانیه برای انیمیشن
  }
  