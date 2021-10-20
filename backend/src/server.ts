import { serverHttp } from "./app";

const port = process.env.PORT || 4000; // Port where the application will run.

serverHttp.listen(port, () => {
  console.log(`🔥 Server succesfully running at http://localhost:${port}`);
});
