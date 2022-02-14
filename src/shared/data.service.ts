import { INote } from "@/store/types";

const BASE_URL = "https://polar-dusk-81472.herokuapp.com/notes";

const checkResponse = (response: Response): Promise<void> => {
  if (response.ok) return response.json();
  return Promise.reject(response);
};

export const fetchNotes = async (): Promise<void> => {
  return fetch(BASE_URL)
    .then(checkResponse)
    .then((data) => data);
};

export const addNoteApi = async (note: INote): Promise<void> => {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(note),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkResponse)
    .then((data) => data);
};

export const removeNoteApi = async (noteId: number): Promise<any> => {
  return fetch(`${BASE_URL}/${noteId}`, {
    method: "DELETE",
  })
    .then(checkResponse)
    .then((data) => data);
};

export const updateNoteApi = async (note: INote): Promise<any> => {
  console.log(note);

  return fetch(`${BASE_URL}/${note.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then(checkResponse)
    .then((data) => data);
};
