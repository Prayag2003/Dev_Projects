#include <iostream>
#include <vector>
#include <algorithm>

// Custom structure to store license information
struct License
{
    int index;   // Index of the license
    double cost; // Cost of the license
};

// Comparison function for sorting licenses based on cost
bool compareLicenses(const License &license1, const License &license2)
{
    return license1.cost < license2.cost;
}

// Function to calculate the optimal order to buy licenses
std::vector<int> optimalLicenseOrder(std::vector<double> rates)
{
    int n = rates.size();
    std::vector<License> licenses;

    // Calculate the initial cost of each license
    for (int i = 0; i < n; i++)
    {
        License license;
        license.index = i + 1; // Adding 1 to index to start from 1 instead of 0
        license.cost = 100 * rates[i];
        licenses.push_back(license);
    }

    // Sort licenses based on cost in ascending order
    std::sort(licenses.begin(), licenses.end(), compareLicenses);

    // Create vector to store optimal order
    std::vector<int> optimalOrder;

    // Add licenses to optimal order in sorted order
    for (const License &license : licenses)
    {
        optimalOrder.push_back(license.index);
    }

    return optimalOrder;
}

int main()
{
    // Example input rates
    std::vector<double> rates = {1.5, 1.2, 1.8, 1.3};

    // Call the function to calculate optimal license order
    std::vector<int> optimalOrder = optimalLicenseOrder(rates);

    // Output the optimal order
    std::cout << "Optimal order to buy licenses: ";
    for (int license : optimalOrder)
    {
        std::cout << license << " ";
    }
    std::cout << std::endl;

    return 0;
}
