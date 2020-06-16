import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent{

   url = 'https://file.io';
  selectedFile = null;

  onFileSelected(event) {
    
    this.selectedFile = event.target.files[0];
  }
  constructor( private http : HttpClient) { }

  onUpload () {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name)
    return this.http.post(this.url , fd )
    .subscribe(res => {

      console.log(res);
    });
  }

}
