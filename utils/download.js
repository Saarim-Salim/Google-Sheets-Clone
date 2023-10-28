import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import * as XLSX from 'xlsx';

// Your component function
export default function YourComponent() {
  const handleDownload = async () => {
    // Request permission to access the file system
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

    if (status !== 'granted') {
      Alert.alert('Permission denied', 'You need to grant permissions to save the file.');
      return;
    }

    try {
      // Create the XLSX worksheet
      const worksheet = XLSX.utils.aoa_to_sheet(this.state.spreadsheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      // Generate the XLSX file as a binary string
      const xlsxBinaryString = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

      // Define the file path where you want to save the XLSX file
      const filePath = `${FileSystem.documentDirectory}/spreadsheet.xlsx`;

      // Write the binary string to the file
      await FileSystem.writeAsStringAsync(filePath, xlsxBinaryString, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Save the file to the media library
      await MediaLibrary.createAssetAsync(filePath);

      Alert.alert('Spreadsheet data has been downloaded and saved to your device.');
    } catch (error) {
      console.log('Error creating XLSX:', error);
      Alert.alert('Error creating XLSX file.');
    }
  }

  // ... rest of your component
}
