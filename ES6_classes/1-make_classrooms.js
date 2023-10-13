import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  const arr = [19, 20, 34];
  return arr.map(x => new ClassRoom(x));
}
