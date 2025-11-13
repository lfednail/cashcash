import { Alert, AlertTitle } from "@/components/ui/alert";

import React from "react";

export default async function unauthorizedPage() {
  return (
    <div>
      <Alert>
        <AlertTitle>Vous devez être connecté pour voir cette page.</AlertTitle>
      </Alert>
    </div>
  );
}
