/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA79k-qAdZ87kJcVoOQa5JiSzgtcBys8sM",
  authDomain: "chat-4092c.firebaseapp.com",
  projectId: "chat-4092c",
  storageBucket: "chat-4092c.appspot.com",
  messagingSenderId: "529568053371",
  appId: "1:529568053371:web:9d792741c5027965828ade",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const storage = getStorage();
export const db = getFirestore();
