'use client'
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { FC, ReactNode } from "react";
import { api } from "@/redux/api";

interface IReduxProvider {
  children: ReactNode;
}

const ReduxProvider: FC<IReduxProvider> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvider;
