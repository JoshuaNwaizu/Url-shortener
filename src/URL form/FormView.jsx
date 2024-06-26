import React from "react";
import FormContainer from "./FormContainer";
import Form from "./Form";
import LinkOutput from "./LinkOutput";
import Button from "../Button";

const FormView = ({
  onHandleClick,
  input,
  handleSetInput,
  getUrl,
  errMessage,
  urlErr,
}) => {
  return (
    <>
      <FormContainer>
        <Form input={input} handleSetInput={handleSetInput} errMessage={errMessage}>
          <Button
            style="bg-[#2BD0D0] py-3 w-[19rem] max-[320px]:w-[14rem] min-[1024px]:w-[10rem] rounded-lg text-[20px] font-bold text-[#fff]  min-[768px]:w-[10rem]"
            text="Shorten It!"
            hover={"#9AE3E3"}
            onHandleClick={onHandleClick}
          />
        </Form>
        <LinkOutput getUrl={getUrl} urlErr={urlErr} />
      </FormContainer>
    </>
  );
};

export default FormView;
