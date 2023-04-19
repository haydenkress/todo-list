import "../style.css";
import { format } from "date-fns";
import Storage from "./Storage";
import createProject from "./Project";
import createTask from "./Task";

export default function UI() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.classList.add("content");
  body.append(content);

  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "hello";
  content.append(header);

  const main = document.createElement("div");
  main.classList.add("main");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  content.append(main);
  main.append(sidebar);
}
