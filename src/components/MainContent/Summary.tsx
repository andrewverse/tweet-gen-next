"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Summary = ({ summary }: { summary: string }) => {
  
  const summariesSplit = summary
    ?.split(/\n(?=\d\. )/)
    ?.map((item) => item.trim());


  return (
    <div className='space-y-5'>
      <div className='font-bold'>2. SELECT THE SUMMARY YOU WANT</div>
      <div className='space-y-4'>
        {summariesSplit?.map((sum, index) => (
          <Card key={index} className={`mx-auto`}>
            <CardContent>
              <p className='mt-4'>{sum}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Summary;
