import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  color: "#000",
  container: "pink",
};

export const darkTheme = {
  body: "#000",
  color: "#fff",
  container: "grey",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.color};
	}
    .container{
        background-color: ${(props) => props.theme.container};
    }
`;
