<?php
function getResult($institute, $result) {
    return '
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
    <html>
    <head>
        <style type="text/css">
            @page {
                margin-left: 1.58in;
                margin-right: 1.18in;
                margin-top: 1.18in;
                margin-bottom: 1.18in
            }

            P {
                margin-bottom: 0.08in;
                direction: ltr;
                widows: 2;
                orphans: 2
            }
        </style>
    </head>
    <body lang="en-US" dir="LTR">
    <p align="CENTER" style="margin-bottom: 0in"><font face="Agency FB, serif"><font size="4"><b>HASIL INSTRUMEN DETEKSI MUTU TK</b></font></font></p>
    <p align="CENTER" style="margin-bottom: 0in"><br></p>

    <table>
        <tbody>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">Nama Lembaga TK</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.$institute->name.'</font></font></font></p></td>
        </tr>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">Status TK</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.ucfirst($institute->status).'</font></font></font></p></td>
        </tr>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">No. Statistik TK</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.$institute->statisticNumber.'</font></font></font></p></td>
        </tr>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">No. NPSN</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.$institute->NPSNNumber.'</font></font></font></p></td>
        </tr>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">Tahun Berdiri TK</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.$institute->establishedDate.'</font></font></font></p></td>
        </tr>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">Alamat TK</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.$institute->address.'</font></font></font></p></td>
        </tr>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">Email/Web TK</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.$institute->emailOrWeb.'</font></font></font></p></td>
        </tr>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">Peringkat Akreditasi</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.ucfirst($institute->accreditation).'</font></font></font></p></td>
        </tr>
        <tr>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">Keberadaan Penjamin Mutu</font></font></font></p></td>
            <td><p style="margin-bottom: 0in"><font face="Times New Roman, serif"><font size="3"><font face="Arial Narrow, serif">: '.ucfirst($institute->qualityAssurance).'</font></font></font></p></td>
        </tr>
        </tbody>
    </table>

    <p align="CENTER" style="margin-bottom: 0in"><br></p>
    <table width="685" cellpadding="7" cellspacing="0">
        <colgroup>
            <col width="90">
            <col width="180">
            <col width="125">
            <col width="80">
            <col width="140">
        </colgroup>
        <tbody>
        <tr valign="middle">
            <td width="90"
                style="border: 1px solid #00000a;  padding-top: 0.1in; padding-bottom: 0.1in; padding-left: 0.08in; padding-right: 0.08in">
                <p align="CENTER"><b>DIMENSI</b></p>
            </td>
            <td width="180"
                style="border: 1px solid #00000a;  padding-top: 0.1in; padding-bottom: 0.1in; padding-left: 0.08in; padding-right: 0.08in">
                <p align="CENTER"><b>KETERANGAN</b></p>
            </td>
            <td width="125"
                style="border: 1px solid #00000a;  padding-top: 0.1in; padding-bottom: 0.1in; padding-left: 0.08in; padding-right: 0.08in">
                <p align="CENTER"><b>JUMLAH NILAI</b></p>
            </td>
            <td width="80"
                style="border: 1px solid #00000a;  padding-top: 0.1in; padding-bottom: 0.1in; padding-left: 0.08in; padding-right: 0.08in">
                <p align="CENTER"><b>HURUF</b></p>
            </td>
            <td width="140"
                style="border: 1px solid #00000a;  padding-top: 0.1in; padding-bottom: 0.1in; padding-left: 0.08in; padding-right: 0.08in;">
                <p align="CENTER"><b>KRITERIA TK</b></p>
            </td>
        </tr>
        <tr valign="middle">
            <td width="90"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>DIMENSI 1</b></p>
            </td>
            <td width="180"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>PENDIDIK DAN TENAGA KEPENDIDIKAN</b></p>
            </td>
            <td width="125"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[1]->score.'</p>
            </td>
            <td width="80"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[1]->char.'</p>
            </td>
            <td width="140"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[1]->criteria.'</p>
            </td>
        </tr>
        <tr valign="middle">
            <td width="90"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>DIMENSI 2</b></p>
            </td>
            <td width="180"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>MANAJEMEN DAN KEPEMIMPINAN</b></p>
            </td>
            <td width="125"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[2]->score.'</p>
            </td>
            <td width="80"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[2]->char.'</p>
            </td>
            <td width="140"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[2]->criteria.'</p>
            </td>
        </tr>
        <tr valign="middle">
            <td width="90"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>DIMENSI 3</b></p>
            </td>
            <td width="180"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>KEGIATAN BELAJAR MENGAJAR</b></p>
            </td>
            <td width="125"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[3]->score.'</p>
            </td>
            <td width="80"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[3]->char.'</p>
            </td>
            <td width="140"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[3]->criteria.'</p>
            </td>
        </tr>
        <tr valign="middle">
            <td width="90"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>DIMENSI 4</b></p>
            </td>
            <td width="180"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>PSM &amp; DUKUNGAN KEPADA ANAK</b></p>
            </td>
            <td width="125"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[4]->score.'</p>
            </td>
            <td width="80"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[4]->char.'</p>
            </td>
            <td width="140"
                style="border: 1px solid #00000a; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[4]->criteria.'</p>
            </td>
        </tr>
        <tr valign="middle">
            <td width="90"
                style="border: 1px solid #00000a; padding-top: 0.11in; padding-bottom: 0.11in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>TOTAL</b></p>
            </td>
            <td width="180"
                style="border: 1px solid #00000a; padding-top: 0.11in; padding-bottom: 0.11in; padding-left: 0.08in; padding-right: 0.08in">
                <p><b>(1+2+3+4)</b></p>
            </td>
            <td width="125"
                style="border: 1px solid #00000a; padding-top: 0.11in; padding-bottom: 0.11in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[0]->score.'</p>
            </td>
            <td width="80"
                style="border: 1px solid #00000a; padding-top: 0.11in; padding-bottom: 0.11in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[0]->char.'</p>
            </td>
            <td width="140"
                style="border: 1px solid #00000a; padding-top: 0.11in; padding-bottom: 0.11in; padding-left: 0.08in; padding-right: 0.08in">
                <p>'.$result[0]->criteria.'</p>
            </td>
        </tr>
        </tbody>
    </table>
    </body>
    </html>
';
}