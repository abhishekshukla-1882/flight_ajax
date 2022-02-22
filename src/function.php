 <?
    function gData($file)
    {
        $myfile = fopen($file, "r") or die("Unable to open file!");
        return fread($myfile, filesize($file));
    }

    function uData($file, $data)
    {
        $myfile = fopen($file, "w") or die("Unable to open file!");
        fwrite($myfile, $data);
        fclose($myfile);
        return $data;
    }
