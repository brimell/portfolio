import React, { createContext, useState, useEffect } from "react";
import { useModal } from "react-hooks-use-modal";

export const MainContext = createContext();

export function ContextProvider(props) {
	return (
		<MainContext.Provider value={{}}>{props.children}</MainContext.Provider>
	);
}
