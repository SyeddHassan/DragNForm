"use client";

import React from "react";
import { Form } from "@prisma/client";

import PreviewDailogButton from "./preview-dailog-button";
import SaveFormButton from "./save-form-button";
import PublishFormButton from "./publish-form-button";
import Designer from "./designer";

const FormBuilder = ({ form }: { form: Form }) => {
  return (
    <main className="flex flex-col w-full">
      <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground mr-2">Form:</span>
          {form.name}
        </h2>
        <div className="flex items-center gap-2">
          <PublishFormButton />
          {!form.published && (
            <>
              <SaveFormButton />
              <PreviewDailogButton />
            </>
          )}
        </div>
      </nav>
      <div className="w-full flex flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
        <Designer />
      </div>
    </main>
  );
};

export default FormBuilder;
