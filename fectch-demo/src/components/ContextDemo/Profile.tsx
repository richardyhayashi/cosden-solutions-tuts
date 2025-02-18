import React, { useContext } from 'react';
import { useUserContext } from './context';

interface ProfileProps {}

export default function({}: ProfileProps) {
   const user = useUserContext();
   
   return <div>{user.name}</div>
}