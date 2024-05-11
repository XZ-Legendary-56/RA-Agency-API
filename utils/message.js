export const message = (statementType, name, phone, email, text) =>
  `
<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width" name="viewport">

<style data-premailer="ignore">
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&amp;subset=latin,cyrillic')
</style>
<style>body {
width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0;
}
.ExternalClass {
width: 100%;
}
.ExternalClass {
line-height: 100%;
}
#backgroundTable {
margin: 0; padding: 0; width: 100% !important; line-height: 100% !important;
}
body {
background-color: #fafafa; background-repeat: repeat; background-position: center top;
}
body {
color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; padding: 0; margin: 0; text-align: left; line-height: 1.3;
}
a:hover {
color: #2795b6;
}
a:active {
color: #2795b6;
}
a:visited {
color: #2ba6cb;
}
h1 a:active {
color: #2ba6cb !important;
}
h2 a:active {
color: #2ba6cb !important;
}
h3 a:active {
color: #2ba6cb !important;
}
h4 a:active {
color: #2ba6cb !important;
}
h5 a:active {
color: #2ba6cb !important;
}
h6 a:active {
color: #2ba6cb !important;
}
h1 a:visited {
color: #2ba6cb !important;
}
h2 a:visited {
color: #2ba6cb !important;
}
h3 a:visited {
color: #2ba6cb !important;
}
h4 a:visited {
color: #2ba6cb !important;
}
h5 a:visited {
color: #2ba6cb !important;
}
h6 a:visited {
color: #2ba6cb !important;
}
table.secondary:hover td {
background: #d0d0d0 !important; color: #555555;
}
table.secondary:hover td a {
color: #555555 !important;
}
table.secondary td a:visited {
color: #555555 !important;
}
table.secondary:active td a {
color: #555555 !important;
}
table.success:hover td {
background: #457a1a !important;
}
table.alert:hover td {
background: #970b0e !important;
}
body.outlook p {
display: inline !important;
}
@media only screen and (min-width: 768px) {
  table.container {
    width: 580px !important;
  }
  .mail .hide-for-desktop {
    display: none !important;
  }
  .mail .hide-and-true {
    display: none !important;
  }
  .mail .hide-and-false {
    display: block !important;
  }
  .mail .hide-or-true {
    display: none !important;
  }
}
@media only screen and (max-width: 600px) {
  .mail img {
    max-width: 100% !important; max-height: 100% !important; padding: 0 !important; width: auto !important; height: auto !important;
  }
  .mail .social img {
    width: inherit !important;
  }
  .mail img.normal {
    width: inherit !important;
  }
  .mail center {
    min-width: 0 !important;
  }
  .mail .container {
    width: 100% !important;
  }
  .mail .row {
    width: 100% !important; display: block !important;
  }
  .mail .wrapper {
    display: block !important; padding-right: 0 !important;
  }
  .mail .columns {
    table-layout: fixed !important; float: none !important; width: 100% !important; padding-right: 0px !important; padding-left: 0px !important; display: block !important;
  }
  .mail .column {
    table-layout: fixed !important; float: none !important; width: 100% !important; padding-right: 0px !important; padding-left: 0px !important; display: block !important;
  }
  .mail .wrapper.first .columns {
    display: table !important;
  }
  .mail .wrapper.first .column {
    display: table !important;
  }
  .mail table.columns > tbody > tr > td {
    width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
  }
  .mail table.column > tbody > tr > td {
    width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
  }
  .mail .columns td.one {
    width: 8.333333% !important;
  }
  .mail .column td.one {
    width: 8.333333% !important;
  }
  .mail .columns td.two {
    width: 16.666666% !important;
  }
  .mail .column td.two {
    width: 16.666666% !important;
  }
  .mail .columns td.three {
    width: 25% !important;
  }
  .mail .column td.three {
    width: 25% !important;
  }
  .mail .columns td.four {
    width: 33.333333% !important;
  }
  .mail .column td.four {
    width: 33.333333% !important;
  }
  .mail .columns td.five {
    width: 41.666666% !important;
  }
  .mail .column td.five {
    width: 41.666666% !important;
  }
  .mail .columns td.six {
    width: 50% !important;
  }
  .mail .column td.six {
    width: 50% !important;
  }
  .mail .columns td.seven {
    width: 58.333333% !important;
  }
  .mail .column td.seven {
    width: 58.333333% !important;
  }
  .mail .columns td.eight {
    width: 66.666666% !important;
  }
  .mail .column td.eight {
    width: 66.666666% !important;
  }
  .mail .columns td.nine {
    width: 75% !important;
  }
  .mail .column td.nine {
    width: 75% !important;
  }
  .mail .columns td.ten {
    width: 83.333333% !important;
  }
  .mail .column td.ten {
    width: 83.333333% !important;
  }
  .mail .columns td.eleven {
    width: 91.666666% !important;
  }
  .mail .column td.eleven {
    width: 91.666666% !important;
  }
  .mail .columns td.twelve {
    width: 100% !important;
  }
  .mail .column td.twelve {
    width: 100% !important;
  }
  .mail td.offset-by-eleven {
    padding-left: 0 !important;
  }
  .mail td.offset-by-ten {
    padding-left: 0 !important;
  }
  .mail td.offset-by-nine {
    padding-left: 0 !important;
  }
  .mail td.offset-by-eight {
    padding-left: 0 !important;
  }
  .mail td.offset-by-seven {
    padding-left: 0 !important;
  }
  .mail td.offset-by-six {
    padding-left: 0 !important;
  }
  .mail td.offset-by-five {
    padding-left: 0 !important;
  }
  .mail td.offset-by-four {
    padding-left: 0 !important;
  }
  .mail td.offset-by-three {
    padding-left: 0 !important;
  }
  .mail td.offset-by-two {
    padding-left: 0 !important;
  }
  .mail td.offset-by-one {
    padding-left: 0 !important;
  }
  .mail table.columns td.expander {
    width: 1px !important;
  }
  .mail .right-text-pad {
    padding-left: 10px !important;
  }
  .mail .text-pad-right {
    padding-left: 10px !important;
  }
  .mail .left-text-pad {
    padding-right: 10px !important;
  }
  .mail .text-pad-left {
    padding-right: 10px !important;
  }
  .mail .hide-for-small {
    display: none !important;
  }
  .mail .show-for-desktop {
    display: none !important;
  }
  .mail .show-for-small {
    display: block !important; width: auto !important; overflow: visible !important;
  }
  .mail .hide-for-desktop {
    display: block !important; width: auto !important; overflow: visible !important;
  }
  .mail .button-hide-for-small {
    display: none !important;
  }
  .mail .button-show-for-desktop {
    display: none !important;
  }
  .mail .button-show-for-small {
    display: table !important; overflow: visible !important;
  }
  .mail .button-hide-for-desktop {
    display: table !important; overflow: visible !important;
  }
  .mail .hide-and-true {
    display: none !important;
  }
  .mail .hide-and-false {
    display: block !important;
  }
  .mail .hide-or-true {
    display: none !important;
  }
}
</style></head>
<body style="width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; text-align: left; line-height: 1.3; background: #fafafa repeat center top; margin: 0; padding: 0;" bgcolor="#fafafa">
<table class="mail" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; height: 100%; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; line-height: 1.3; background: #fafafa repeat center top; margin: 0; padding: 0;" bgcolor="#fafafa">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" class="center" valign="top" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;">
<center style="width: 100%; min-width: 580px;">
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<h2 style="text-align: center; color: #222222; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 36px; line-height: 1.3; word-break: normal; margin: 0; padding: 0;" align="center"><em><strong>RA Agency</strong></em></h2>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 11px; -webkit-border-radius: 11px; -moz-border-radius: 11px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 5px 0;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<h6 style="color: #222222; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 20px; text-align: left; line-height: 1.3; word-break: normal; margin: 0; padding: 0;" align="left"><strong>Заявка на ${statementType}</strong></h6>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 20px 0px 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 180px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 0px 0px 20px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left">ФИО:</p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="eight columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 380px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 20px 0px 0px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left">&nbsp;${name}</p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 20px 0px 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 180px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 0px 0px 20px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left">Номер телефона:</p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="eight columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 380px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 20px 0px 0px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left">${phone}</p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 20px 0px 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 180px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 0px 0px 20px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left">e-mail:</p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="eight columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 380px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px 20px 0px 0px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left">${email}</p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="line-height: 8px; font-size: 16px;">${text}</span></p>

</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Ubuntu, sans-serif; font-weight: normal; font-size: 15px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>


</center>
</td>
</tr>
</tbody></table>




</body></html>
`;
