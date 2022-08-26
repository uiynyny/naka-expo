export function _calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const blobToBase64 = blob => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result.split(',')[1]);
  };
  reader.readAsDataURL(blob);
});


