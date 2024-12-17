"use client";

// -------- FOOFEST API ----------
// PUT request to reserve spot
const glitchHeadersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export default async function putReservation(reservationData) {
  // event.preventDefault();
  const response = await fetch("http://localhost:8080/reserve-spot", {
    method: "PUT",
    headers: glitchHeadersList,
    body: JSON.stringify(reservationData),
  });

  const responseData = await response.json();
  const reservationId = responseData.id;
  return reservationId;
}

// POST request with reservationId to confirm booking

export async function postReservation(reservationData) {
  console.log("postReservation funktion kører");
  const response = await fetch("http://localhost:8080/fullfill-reservation", {
    method: "POST",
    headers: glitchHeadersList,
    body: JSON.stringify(reservationData),
  });

  const data = await response.json();
  console.log("response from glitch PUSH", data);
  return data;
}