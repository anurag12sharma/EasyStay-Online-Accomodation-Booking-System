"use client";
import React from "react";
import axios from "axios";
import { AiFillGithub, AiFillUnlock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import {signIn} from "next-auth/react"
import { FaGithub } from "react-icons/fa";
import LoginModal from "./LoginModal";


const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit:SubmitHandler<FieldValues> = (data) =>{
    setIsLoading(true);

    axios.post('/api/register', data)
        .then(() => {
            toast.success("Signed Up!");
            loginModal.onOpen();
            registerModal.onClose();
        })
        .catch((error) => {
            toast.error("Something went wrong"); 
        })
        .finally(() => {
            setIsLoading(false);
        })
  }

  const toggle = useCallback(()=>{
    registerModal.onClose();
    loginModal.onOpen();
  },[loginModal,registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading
            title="Welcome to Easy-Stay"
            subtitle="Create an Account"
        />
        <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required 
        />
        <Input
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required 
        />
        <Input
            id="password"
            type="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required 
        />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button
            outline
            label="Continue with Google"
            icon={FcGoogle}
            onClick={()=>signIn('google')}
        />
        <Button
            outline
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={()=>signIn('github')}
        />
        <div
            className="
                text-neutral-500
                text-center
                mt-4
                font-light
            "
        >
            <div className="flex flex-row items-center gap-2 justify-center">
                <div>Already have an account?</div>
                <div 
                    onClick={toggle}
                    className="
                    text-neutral-800 
                    cursor-pointer 
                    hover:underline
                ">
                    Log in
                </div>
            </div>
        </div>
    </div>
  )

  return (
    <Modal
        disabled = {isLoading}
        isOpen = {registerModal.isOpen}
        title="Register"
        actionLable="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body = {bodyContent}
        footer={footerContent}
    />
  );
};

export default RegisterModal;
