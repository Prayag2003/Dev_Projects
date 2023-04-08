#include <iostream>
#include <vector>

using namespace std;

// Function to find the peak entry index p in an unimodal array A
int findPeakEntry(vector<int> &A)
{
    int n = A.size();
    int left = 0;
    int right = n - 1;

    // Binary search to find the peak entry
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        if (A[mid] < A[mid + 1])
        {
            // If A[mid] < A[mid + 1], then the peak entry is on the right side
            left = mid + 1;
        }
        else
        {
            // If A[mid] >= A[mid + 1], then the peak entry is on the left side
            right = mid;
        }
    }

    // At the end of the binary search, left and right will point to the peak entry
    return left;
}

int main()
{
    // Example usage
    vector<int> A = {1, 3, 6, 9, 12, 10, 8, 5};
    int peakEntry = findPeakEntry(A);
    cout << "Peak entry index: " << peakEntry << endl;

    return 0;
}
